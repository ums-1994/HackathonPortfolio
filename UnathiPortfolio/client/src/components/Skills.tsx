import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiAmazon, SiHtml5, SiPostgresql, SiRedis, SiGit, SiReact, SiJavascript, SiTypescript, SiDocker } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiHtml5, name: "Web Development" },
  { icon: SiPython, name: "Python" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiRedis, name: "Database" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" }
];

export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <skill.icon className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}