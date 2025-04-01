import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Social Links</h3>
                <SocialLinks />
              </div>

              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <a 
                  href="mailto:umsibanda.1994@gmail.com"
                  className="text-primary hover:underline"
                >
                  umsibanda.1994@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}