import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, Lightbulb, Globe, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🚀 Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              vibeflo.io
            </span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're revolutionizing software development with the fastest and cheapest vibe coding platform in the world. 
            Our platform enables anyone to build full-stack applications in hours, not days or weeks, with no coding experience required.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                To democratize software development by providing the fastest and most affordable vibe coding platform. 
                We believe that everyone should be able to build professional applications without needing years of coding experience.
              </p>
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build full-stack applications in hours with our revolutionary vibe coding approach.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Driving Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empowering organizations to find the talent they need to push boundaries and create impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the world's most trusted platform for professional connections, where opportunities 
                are discovered, careers are built, and businesses thrive through exceptional talent partnerships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">10k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we build our platform and serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We believe in genuine connections and transparent communication between all members of our community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Every professional deserves equal opportunities, regardless of background, experience level, or location.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We continuously evolve our platform with cutting-edge technology to enhance user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Security, privacy, and reliability are fundamental to everything we build and every relationship we foster.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A diverse group of passionate professionals dedicated to revolutionizing how careers are built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Former VP at leading tech companies, Sarah brings 15+ years of experience in scaling platforms 
                  and building world-class teams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">MC</span>
                </div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  AI and machine learning expert with a passion for creating intelligent systems that connect 
                  the right people at the right time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">EP</span>
                </div>
                <CardTitle>Elena Rodriguez</CardTitle>
                <CardDescription>Head of Product</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Product strategist focused on user experience and community building, ensuring our platform 
                  serves both job seekers and employers effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From startup to platform leader
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2020 - Founded</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Started as a small team with a big vision to transform professional networking and job discovery.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2021 - First 1,000 Users</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Reached our first major milestone with early adopters who believed in our vision for better job matching.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2023 - Global Expansion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Expanded internationally, now serving professionals across 50+ countries with localized experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2024 - AI-Powered Matching</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Launched advanced AI algorithms that have increased successful matches by 300% and reduced time-to-hire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the future of professional networking and career development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vibe-jobs">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}