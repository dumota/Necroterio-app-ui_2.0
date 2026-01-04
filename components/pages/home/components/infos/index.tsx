"use client";

import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { motion } from "framer-motion";
import { BookOpen, Skull, Users, Zap } from "lucide-react";

export default function Infos() {
  const infos = [
    {
      icon: BookOpen,
      title: "O que são Histórias de Terror?",
      description: "Histórias de terror são narrativas que exploram o medo, o suspense e o desconhecido. Elas nos transportam para universos sombrios onde o sobrenatural se encontra com o psicológico, criando uma experiência única de tensão e adrenalina.",
    },
    {
      icon: Skull,
      title: "O Necroterio",
      description: "O Necroterio é uma plataforma dedicada aos amantes do terror. Aqui você encontra as mais assustadoras e envolventes histórias de terror, escritas por uma comunidade apaixonada por este gênero literário que desperta nossos medos mais profundos.",
    },
    {
      icon: Users,
      title: "Nossa Comunidade",
      description: "Faça parte de uma comunidade que compartilha a paixão pelo terror. Leia histórias incríveis, descubra novos autores e crie seu próprio blog para compartilhar suas narrativas assustadoras com o mundo.",
    },
    {
      icon: Zap,
      title: "Explore o Medo",
      description: "Descubra histórias que vão desde o terror psicológico até contos sobrenaturais. Cada história é uma jornada única que testa os limites da imaginação e desperta emoções intensas que você nunca esquecerá.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Text as="h2" className="text-red-500 mb-2">
          Bem-vindo ao Mundo do Terror
        </Text>
        <Text as="p" className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Descubra um universo repleto de histórias que vão te arrepiar e manter você acordado até tarde
        </Text>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {infos.map((info, index) => {
          const Icon = info.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-neutral-300 hover:border-red-500 transition-colors duration-300">
                <Card.Header>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <Card.Title className="text-lg text-red-900 dark:text-red-500">
                      {info.title}
                    </Card.Title>
                  </div>
                </Card.Header>
                <Card.Content>
                  <Card.Description className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {info.description}
                  </Card.Description>
                </Card.Content>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}