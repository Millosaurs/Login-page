'use client'

import { useState } from 'react'
import { Star, Calendar, DollarSign, Upload, Briefcase, Award, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function FreelancerProfile() {
  const [availability, setAvailability] = useState("Available")
  const [hourlyRate, setHourlyRate] = useState(75)

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 rounded-full w-full h-[200%] -top-1/2 animate-slow-spin"></div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap');
        body {
          font-family: 'Source Code Pro', monospace;
          background-color: black;
        }
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 60s linear infinite;
        }
      `}</style>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 relative z-10 max-w-full">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <Card className="bg-black/50 border-2 shadow-lg">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Freelancer" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="text-white mt-4">Jane Doe</CardTitle>
              <CardDescription className="text-gray-300">Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-300">Availability:</span>
                <Badge variant={availability === "Available" ? "default" : "secondary"} className=" bg-green-500 text-white">
                  {availability}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-300">Hourly Rate:</span>
                <span className="text-gray-300">${hourlyRate}/hr</span>
              </div>
              <Button className="w-full mt-4 bg-white hover:bg-gray-300">Contact Me</Button>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-white">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {["React", "Node.js", "TypeScript", "Python", "AWS"].map((skill) => (
                <div key={skill} className="flex justify-between items-center">
                  <span className="text-gray-300">{skill}</span>
                  <Progress value={Math.random() * 40 + 60} className="w-1/2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-6">
          <Card className="bg-black/50 border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Briefcase className="w-5 h-5 text-gray-300" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "Senior Developer", company: "Tech Co", period: "2020 - Present" },
                { title: "Web Developer", company: "Digital Agency", period: "2017 - 2020" },
                { title: "Junior Developer", company: "Startup Inc", period: "2015 - 2017" },
              ].map((job, index) => (
                <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-300">{job.title}</h3>
                  <p className="text-sm text-gray-400">{job.company} | {job.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Star className="w-5 h-5 text-gray-300" /> Client Reviews
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "John Smith", rating: 5, comment: "Excellent work! Delivered on time and exceeded expectations." },
                { name: "Sarah Johnson", rating: 4, comment: "Great communication and quality results." },
                { name: "Mike Brown", rating: 5, comment: "Highly skilled and professional. Will hire again!" },
              ].map((review, index) => (
                <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-300">{review.name}</span>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{review.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-white">
                <Award className="w-5 h-5 text-gray-300" /> Certifications & Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: "certification", name: "AWS Certified Developer" },
                  { type: "certification", name: "Google Cloud Professional" },
                  { type: "portfolio", name: "E-commerce Website" },
                  { type: "portfolio", name: "Mobile App UI/UX" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 border border-gray-700 rounded bg-gray-800/50 text-gray-300">
                    {item.type === "certification" ? (
                      <Award className="w-5 h-5 text-gray-300" />
                    ) : (
                      <FileText className="w-5 h-5 text-white-300" />
                    )}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white">
                <Upload className="w-4 h-4 mr-2" /> Upload New Item
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
