import { useState } from "react";
import { Container, VStack, HStack, Text, Box, Input, Select, Button, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, IconButton } from "@chakra-ui/react";
import { FaSearch, FaInfoCircle } from "react-icons/fa";

const tools = [
  {
    name: "Ferramenta de Análise de Sentimento",
    category: "Análise de Texto",
    description: "Ferramenta que analisa o sentimento em textos, identificando emoções como alegria, tristeza, raiva, etc.",
    features: ["Análise em tempo real", "Suporte a múltiplos idiomas", "API disponível"],
    pricing: "Gratuito até 1000 requisições por mês",
    useCases: ["Monitoramento de redes sociais", "Análise de feedback de clientes", "Pesquisa de mercado"],
  },
  {
    name: "Gerador de Imagens por IA",
    category: "Criação de Conteúdo",
    description: "Ferramenta que gera imagens a partir de descrições textuais usando inteligência artificial.",
    features: ["Geração de imagens de alta qualidade", "Customização de estilos", "API disponível"],
    pricing: "Plano básico gratuito, planos pagos a partir de R$ 50/mês",
    useCases: ["Criação de conteúdo para redes sociais", "Design gráfico", "Marketing"],
  },
  // Adicione mais ferramentas conforme necessário
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredTools = tools.filter((tool) => {
    return (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase())) && (selectedCategory === "" || tool.category === selectedCategory);
  });

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          IAgora
        </Heading>
        <Text fontSize="xl">Seu diretório abrangente de ferramentas de IA em português</Text>
        <HStack spacing={4} width="100%">
          <Input placeholder="Buscar ferramenta..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Select placeholder="Selecionar categoria" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Análise de Texto">Análise de Texto</option>
            <option value="Criação de Conteúdo">Criação de Conteúdo</option>
            {/* Adicione mais categorias conforme necessário */}
          </Select>
          <IconButton aria-label="Buscar" icon={<FaSearch />} />
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} width="100%">
          {filteredTools.map((tool, index) => (
            <Card key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{tool.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{tool.description}</Text>
                <Text fontWeight="bold" mt={2}>
                  Recursos:
                </Text>
                <VStack align="start" spacing={1}>
                  {tool.features.map((feature, idx) => (
                    <Text key={idx}>- {feature}</Text>
                  ))}
                </VStack>
                <Text fontWeight="bold" mt={2}>
                  Preço:
                </Text>
                <Text>{tool.pricing}</Text>
                <Text fontWeight="bold" mt={2}>
                  Casos de Uso:
                </Text>
                <VStack align="start" spacing={1}>
                  {tool.useCases.map((useCase, idx) => (
                    <Text key={idx}>- {useCase}</Text>
                  ))}
                </VStack>
              </CardBody>
              <CardFooter>
                <Button leftIcon={<FaInfoCircle />} colorScheme="teal">
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
