import { Helmet } from "react-helmet";
import TopBar from "@/components/layout/top-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Environmental Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Design and implement water treatment solutions for industrial clients. Work on sewage treatment plants and effluent treatment systems.",
      requirements: [
        "B.E./B.Tech in Environmental/Chemical Engineering",
        "Experience in water treatment plant design",
        "Knowledge of environmental regulations",
        "AutoCAD proficiency"
      ]
    },
    {
      id: 2,
      title: "Project Manager",
      department: "Operations",
      location: "Delhi, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead turnkey water treatment projects from conception to completion. Coordinate with clients, vendors, and internal teams.",
      requirements: [
        "Engineering degree with MBA preferred",
        "Project management certification (PMP)",
        "Experience in water treatment industry",
        "Strong leadership and communication skills"
      ]
    },
    {
      id: 3,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Develop new business opportunities in water treatment sector. Build relationships with industrial clients and promote our solutions.",
      requirements: [
        "B.Tech/MBA in relevant field",
        "Sales experience in industrial sector",
        "Understanding of water treatment technologies",
        "Excellent presentation skills"
      ]
    },
    {
      id: 4,
      title: "Service Technician",
      department: "Service & Maintenance",
      location: "Chennai, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Provide on-site maintenance and troubleshooting for water treatment equipment. Ensure optimal performance of installed systems.",
      requirements: [
        "Diploma/B.Tech in Mechanical/Electrical",
        "Field service experience preferred",
        "Willingness to travel",
        "Problem-solving skills"
      ]
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance for employee and family",
    "Performance-based bonuses",
    "Professional development opportunities",
    "Flexible working arrangements",
    "Annual company retreats"
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Work with talented professionals in a collaborative environment"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Opportunities for advancement and skill development"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - DLS Envirotech Corporation | Join Our Environmental Technology Team</title>
        <meta name="description" content="Explore exciting career opportunities at DLS Envirotech Corporation. Join our team of environmental technology experts and help create sustainable water treatment solutions." />
        <meta name="keywords" content="careers, jobs, environmental technology, water treatment, DLS Envirotech, engineering careers" />
        <meta property="og:title" content="Careers - DLS Envirotech Corporation" />
        <meta property="og:description" content="Explore exciting career opportunities at DLS Envirotech Corporation. Join our team of environmental technology experts." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <main className="bg-muted">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-career-hero-title">
                Join Our Team
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-career-hero-description">
                Build your career with a leading environmental technology company. 
                Be part of our mission to create sustainable water treatment solutions.
              </p>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-why-work-title">
                  Why Work With Us?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-work-description">
                  Join a company that values innovation, sustainability, and professional growth
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {values.map((value, index) => (
                  <Card key={index} className="text-center" data-testid={`card-value-${index}`}>
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {value.icon}
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-background rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-benefits-title">
                  Employee Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3" data-testid={`benefit-${index}`}>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Current Openings */}
          <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-openings-title">
                  Current Openings
                </h2>
                <p className="text-lg text-muted-foreground" data-testid="text-openings-description">
                  Explore exciting career opportunities with our growing team
                </p>
              </div>

              <div className="grid gap-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow" data-testid={`card-job-${job.id}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                            <Badge variant="outline">{job.experience}</Badge>
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                        <Button data-testid={`button-apply-${job.id}`}>
                          Apply Now
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {job.description}
                      </CardDescription>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" data-testid="text-cta-title">
                Don't See a Perfect Match?
              </h2>
              <p className="text-xl mb-8 text-primary-100" data-testid="text-cta-description">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button variant="secondary" size="lg" data-testid="button-send-resume">
                Send Your Resume
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Career;