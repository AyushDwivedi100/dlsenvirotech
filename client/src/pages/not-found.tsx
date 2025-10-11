import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import dlsLogo from "@assets/dls-envirotech-logo.png";
import { SEOHead } from "@/components/seo/seo-head";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to DLS Envirotech Corporation homepage for water treatment solutions including STP, ETP, and industrial wastewater treatment services."
        canonical="https://dlsenvirotech.com/404"
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-muted px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4">
              <img src={dlsLogo} alt="DLS Envirotech" className="h-12" />
              <div className="flex items-center gap-2">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <h1 className="text-2xl font-bold text-foreground">
                  404 - Page Not Found
                </h1>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground text-center">
              Sorry, we couldn’t find the page you were looking for. It may have
              been moved, deleted, or never existed.
            </p>

            <div className="mt-6 flex flex-col justify-center sm:flex-row gap-2">
              <a
                href="/"
                className="inline-block w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center"
              >
                Go to Homepage
              </a>
              <a
                href="/services"
                className="inline-block w-full sm:w-auto px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 text-center"
              >
                View Our Services
              </a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
    </>
  );
}
