
// MVP Siren Ring App – Clean Version with Safety Mode and Simulated Biometrics

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SirenAppMVP() {
  const [safeMode, setSafeMode] = useState(false);
  const [stepCount, setStepCount] = useState(0);
  const [heartRate, setHeartRate] = useState(72);
  const [skinTemp, setSkinTemp] = useState(36.5);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepCount((prev) => prev + Math.floor(Math.random() * 10));
      setHeartRate(70 + Math.floor(Math.random() * 10));
      setSkinTemp(36 + Math.random());
    }, 3000);

    return () => clearInterval(stepInterval);
  }, []);

  const handleSafeModeToggle = () => {
    setSafeMode((prev) => !prev);
    if (!safeMode) {
      alert("Safe Mode Activated! Emergency protocols are on.");
    } else {
      alert("Safe Mode Deactivated.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Siren Ring App</h1>
      <Tabs defaultValue="dashboard" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="safety">Safety</TabsTrigger>
          <TabsTrigger value="ritual">Rituals</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Daily Overview</h2>
              <p className="text-sm mt-2">
                Mood: 🌸 Calm <br />
                Cycle Phase: Luteal <br />
                Steps: {stepCount} <br />
                Heart Rate: {heartRate} bpm <br />
                Skin Temp: {skinTemp.toFixed(1)}°C
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellness">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Wellness & Recovery</h2>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Sleep Insights (coming soon)</li>
                <li>Step Tracking + Biometrics</li>
                <li>Cycle Tracker (Luteal Support)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Safety Mode</h2>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Location-based Danger Alerts</li>
                <li>Auto Check-In System</li>
                <li>Emergency Contact Signal</li>
              </ul>
              <Button className="mt-4" onClick={handleSafeModeToggle}>
                {safeMode ? "Deactivate Safe Mode" : "Activate Safe Mode"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ritual">
          <Card className="mt-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Ritual Assistant</h2>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Guided Breathing (coming soon)</li>
                <li>Gentle Sound Baths</li>
                <li>Evening Wind-Downs</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
