import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, BarChart3, Users, Activity } from "lucide-react";

interface DoctorDashboardProps {
  user: User | null;
  role: string | null;
}

const DoctorDashboard = ({ user, role }: DoctorDashboardProps) => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user, role]);

  const loadUserData = async () => {
    if (!user) return;

    // Load profile
    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(profileData);

    // Load appointments based on role
    let appointmentsQuery = supabase
      .from("appointments")
      .select(`
        *,
        profiles:patient_id (
          full_name,
          email,
          phone
        )
      `)
      .order("appointment_date", { ascending: true });

    // If doctor (not admin), only show their appointments
    if (role === "doctor") {
      appointmentsQuery = appointmentsQuery.eq("doctor_id", user.id);
    }

    const { data: appointmentsData } = await appointmentsQuery;
    setAppointments(appointmentsData || []);
  };

  const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
    const { error } = await supabase
      .from("appointments")
      .update({ status: newStatus })
      .eq("id", appointmentId);

    if (!error) {
      loadUserData();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-secondary";
      case "pending":
        return "bg-accent";
      case "cancelled":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === "pending").length,
    completed: appointments.filter(a => a.status === "completed").length,
    patients: new Set(appointments.map(a => a.patient_id)).size,
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">
            {role === "admin" ? "Admin Dashboard" : "Doctor Dashboard"}
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, Dr. {profile?.full_name || "User"}
          </p>
        </div>
        {role === "admin" && (
          <Link to="/analytics">
            <Button size="lg" className="gap-2">
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </Button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Appointments
            </CardTitle>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending
            </CardTitle>
            <Activity className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completed
            </CardTitle>
            <BarChart3 className="h-5 w-5 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Unique Patients
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.patients}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
          <CardDescription>Manage patient appointments</CardDescription>
        </CardHeader>
        <CardContent>
          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No appointments</h3>
              <p className="text-muted-foreground">
                No appointments scheduled yet
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Hospital</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Symptoms</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {appointment.profiles?.full_name || "Unknown"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {appointment.profiles?.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{appointment.hospital_name}</div>
                          <div className="text-sm text-muted-foreground">
                            {appointment.hospital_location}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(appointment.appointment_date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{appointment.appointment_time}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {appointment.symptoms || "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {appointment.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateAppointmentStatus(appointment.id, "completed")}
                              >
                                Complete
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => updateAppointmentStatus(appointment.id, "cancelled")}
                              >
                                Cancel
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorDashboard;
