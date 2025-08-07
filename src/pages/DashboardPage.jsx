import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Briefcase, Clock, PlusCircle } from 'lucide-react';

const DashboardPage = () => {
  // Hardcoded data for now
  const upcomingHolidays = [
    { date: '2024-10-02', name: 'Gandhi Jayanti' },
    { date: '2024-10-31', name: 'Diwali' },
  ];

  const leaveBalance = {
    annual: 10,
    sick: 5,
    casual: 5,
  };

  const attendanceSummary = {
    workedDays: 20,
    totalDays: 22,
  };

  const [project, setProject] = useState('');
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');

  const handleQuickEntrySubmit = (e) => {
    e.preventDefault();
    // Handle quick entry submission logic here
    console.log({ project, task, hours });
    setProject('');
    setTask('');
    setHours('');
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Holidays
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {upcomingHolidays.map((holiday) => (
              <div key={holiday.name} className="text-xs text-muted-foreground">
                {holiday.date}: {holiday.name}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leave Balance</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{leaveBalance.annual}</div>
            <p className="text-xs text-muted-foreground">Annual Leave</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceSummary.workedDays} / {attendanceSummary.totalDays}</div>
            <p className="text-xs text-muted-foreground">days worked this month</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Entry</CardTitle>
            <CardDescription>Log your work for the day.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleQuickEntrySubmit} className="grid gap-4 md:grid-cols-4">
              <div className="grid gap-2">
                <Label htmlFor="project">Project</Label>
                <Input id="project" placeholder="e.g. HRMS Project" value={project} onChange={(e) => setProject(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="task">Task Description</Label>
                <Input id="task" placeholder="e.g. Refactored dashboard" value={task} onChange={(e) => setTask(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hours">Hours</Label>
                <Input id="hours" type="number" placeholder="e.g. 2" value={hours} onChange={(e) => setHours(e.target.value)} />
              </div>
              <div className="self-end">
                <Button type="submit" className="w-full">Log Time</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
