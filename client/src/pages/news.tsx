import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const newsArticles = [
  {
    id: 1,
    title: "DLS Envirotech Expands Operations to Southeast Asia",
    date: "October 26, 2023",
    tags: ["Expansion", "Corporate News", "Asia"],
    summary:
      "We are thrilled to announce the opening of our new regional headquarters in Singapore, strengthening our commitment to providing sustainable water solutions in Southeast Asia.",
  },
  {
    id: 2,
    title: "New Air Pollution Control System Launched for Heavy Industries",
    date: "October 15, 2023",
    tags: ["Technology", "Air Pollution", "Innovation"],
    summary:
      "Our new scrubber technology sets an industry benchmark, removing over 99.5% of particulate matter and SOx emissions for our industrial partners.",
  },
  {
    id: 3,
    title: "DLS Envirotech Unveils State-of-the-Art Material Recovery Facility",
    date: "September 30, 2023",
    tags: ["Waste Management", "MRF", "Sustainability"],
    summary:
      "Our latest Material Recovery Facility (MRF) in Europe now processes over 500 tons of solid waste daily, achieving a 90% resource recovery rate.",
  },
];

const NewsPage = () => {
  return (
    <>
      <Helmet>
        <title>News & Updates - DLS Envirotech</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest news, events, and technological advancements from DLS Envirotech Corporation."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-muted to-muted py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Latest News & Updates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Follow our journey as we innovate and expand our reach in the
                environmental technology sector.
              </p>
              <Button size="lg" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </section>

          {/* News Grid */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {newsArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="flex flex-col hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-primary pt-1 font-medium">
                        {article.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{article.summary}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experts is ready to answer your questions and help you find the perfect
                environmental solution for your needs. Let's build a sustainable future together.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
