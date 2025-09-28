import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, MapPin, Phone, User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    hospital: "",
    symptoms: "",
    timeSlot: ""
  });
  const { toast } = useToast();

  const hospitals = [
    { name: "Government Hospital", location: "Pathapatnam, Andhra Pradesh", distance: "3.2 km", phone: "086722 22302" },
    { name: "Doctor Veerendranath Hospital", location: "Buttaiahpeta, Machilipatnam", distance: "1.8 km", phone: "086722 22278" },
    { name: "Vaishnavi Hospital", location: "Chinna Gandhi Bommi", distance: "2.1 km", phone: "0883 796 4513" },
    { name: "Andhra Pradesh Government Hospital", location: "Tallapalem Road, Machilipatnam", distance: "2.7 km" },
    { name: "Dr V Radha Krishna Murthy Hospital", location: "Shaik Imam Street, Machilipatnam", distance: "3.5 km", phone: "099498 46008" }
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !formData.name || !formData.hospital || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment has been scheduled for ${format(date, "PPP")} at ${formData.timeSlot}.`,
    });

    // Reset form
    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      hospital: "",
      symptoms: "",
      timeSlot: ""
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit with nearby healthcare facilities. Fill in your details and select your preferred time slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-primary" />
                  Patient Information
                </CardTitle>
                <CardDescription>
                  Please provide accurate information for appointment booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        placeholder="Enter your age"
                        min="1"
                        max="120"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Hospital Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="hospital">Select Hospital/PHC *</Label>
                    <Select value={formData.hospital} onValueChange={(value) => setFormData({...formData, hospital: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your preferred healthcare facility" />
                      </SelectTrigger>
                      <SelectContent>
                        {hospitals.map((hospital) => (
                          <SelectItem key={hospital.name} value={hospital.name}>
                            <div className="flex items-center justify-between w-full">
                              <span>{hospital.name}</span>
                              <span className="text-sm text-muted-foreground ml-2">
                                {hospital.location} • {hospital.distance}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Appointment Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">Time Slot *</Label>
                      <Select value={formData.timeSlot} onValueChange={(value) => setFormData({...formData, timeSlot: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4" />
                                {slot}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Symptoms/Reason for Visit</Label>
                    <Textarea
                      id="symptoms"
                      value={formData.symptoms}
                      onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
                      placeholder="Briefly describe your symptoms or reason for the appointment"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-primary shadow-healthcare">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Nearby Facilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hospitals.slice(0, 3).map((hospital) => (
                  <div key={hospital.name} className="p-3 rounded-lg bg-primary-light/10 border border-primary-light/20">
                    <h4 className="font-medium text-sm">{hospital.name}</h4>
                    <p className="text-xs text-muted-foreground">{hospital.location}</p>
                    <p className="text-xs text-primary font-medium">{hospital.distance} away</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Phone className="mr-2 h-5 w-5 text-secondary" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">For emergencies, call:</p>
                  <p className="text-lg font-bold text-secondary">108</p>
                  <p className="text-xs text-muted-foreground">National Emergency Number</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;