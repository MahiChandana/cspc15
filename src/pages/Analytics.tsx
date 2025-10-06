import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Calendar, TrendingUp, Activity } from "lucide-react";

const Analytics = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pendingAppointments: 0,
    completedAppointments: 0,
    totalPatients: 0,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      // Check if user is doctor or admin
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .single();

      if (roleData && (roleData.role === "doctor" || roleData.role === "admin")) {
        setIsAuthorized(true);
        loadAnalytics();
      } else {
        navigate("/dashboard");
      }
    };

    checkAuth();
  }, [navigate]);

  const loadAnalytics = async () => {
    // Get appointment stats
    const { data: appointments } = await supabase
      .from("appointments")
      .select("*");

    if (appointments) {
      setStats({
        totalAppointments: appointments.length,
        pendingAppointments: appointments.filter(a => a.status === "pending").length,
        completedAppointments: appointments.filter(a => a.status === "completed").length,
        totalPatients: new Set(appointments.map(a => a.patient_id)).size,
      });
    }
  };

  if (!isAuthorized) {
    return null;
  }

  const statCards = [
    {
      title: "Total Appointments",
      value: stats.totalAppointments,
      icon: Calendar,
      description: "All time appointments",
      color: "text-primary",
    },
    {
      title: "Pending Appointments",
      value: stats.pendingAppointments,
      icon: Activity,
      description: "Awaiting confirmation",
      color: "text-accent",
    },
    {
      title: "Completed Appointments",
      value: stats.completedAppointments,
      icon: TrendingUp,
      description: "Successfully completed",
      color: "text-secondary",
    },
    {
      title: "Total Patients",
      value: stats.totalPatients,
      icon: Users,
      description: "Unique patients",
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive overview of your healthcare practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-healthcare transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Trends</CardTitle>
              <CardDescription>Monthly appointment statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Chart visualization coming soon
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Distribution</CardTitle>
              <CardDescription>Patients by status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Chart visualization coming soon
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
