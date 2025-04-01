import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold mb-8">My Resume</h1>
          
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button asChild className="flex items-center gap-2">
              <a href="/Unathi_Sibanda_CV.pdf" download>
                <FileDown className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Unathi_Sibanda_CV.pdf" target="_blank" rel="noopener noreferrer">
                View CV
              </a>
            </Button>
          </div>

          <div className="grid gap-10">
            {/* Experience Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Experience</h2>
              
              <div className="border-l-2 border-primary pl-4 space-y-8">
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-medium">Administrative Assistant</h3>
                  <p className="text-muted-foreground">Total Beyers Naude | May 2022 - December 2022</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Processed customer requests including policy updates, change of details, and banking information while ensuring compliance with internal policies and procedures.</li>
                    <li>Maintained compliance with operational and regulatory codes, identifying and mitigating potential risks.</li>
                    <li>Assisted customers with product selection based on their needs, successfully upselling services and products.</li>
                    <li>Managed internal and external correspondence, drafting customized responses to non-standard requests and providing efficient telephonic and email support.</li>
                    <li>Managed customer inquiries and resolved issues using first-call resolution techniques, ensuring a high level of customer satisfaction.</li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-medium">Assistant Educator</h3>
                  <p className="text-muted-foreground">Glenhazel Primary School | May 2023 - July 2024</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Provided classroom support to teachers, assisting in lesson preparation and ensuring smooth daily operations.</li>
                    <li>Worked one-on-one with students to help them understand assignments, assisting in the development of reading, writing, and math skills.</li>
                    <li>Helped manage classroom behavior and reinforced positive learning environments.</li>
                    <li>Coordinated with teachers and parents to monitor student progress and provide support where needed.</li>
                    <li>Assisted in organizing educational materials and maintaining student records.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Education</h2>
              
              <div className="border-l-2 border-primary pl-4">
                <div className="relative">
                  <div className="absolute -left-6 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-medium">Matric Certificate (Grade 12)</h3>
                  <p className="text-muted-foreground">Lere la Thuto Secondary School | 2013</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-card p-3 rounded border">Web Development (JavaScript, React, TypeScript)</div>
                <div className="bg-card p-3 rounded border">Cloud Data Engineering (AWS)</div>
                <div className="bg-card p-3 rounded border">Database Management (PostgreSQL, Redis)</div>
                <div className="bg-card p-3 rounded border">Data Visualization and Analysis</div>
                <div className="bg-card p-3 rounded border">Docker & Containerization</div>
                <div className="bg-card p-3 rounded border">Version Control (Git)</div>
                <div className="bg-card p-3 rounded border">Problem Solving & Technical Troubleshooting</div>
                <div className="bg-card p-3 rounded border">Project Management & Communication</div>
              </div>
            </div>

            {/* References Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">References</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-4 rounded border">
                  <h3 className="font-medium">Peter Motileni</h3>
                  <p className="text-sm text-muted-foreground">Manager, Total Beyers Naude</p>
                  <p className="text-sm mt-2">tbn@bbpco.co.za</p>
                  <p className="text-sm">0812345015</p>
                </div>
                
                <div className="bg-card p-4 rounded border">
                  <h3 className="font-medium">MR Rasekhuthuma</h3>
                  <p className="text-sm text-muted-foreground">Principal, Glenhazel Primary School</p>
                  <p className="text-sm mt-2">glennet@global.co.za</p>
                  <p className="text-sm">011 882 6537</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}