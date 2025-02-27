import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";
import { AlertCircle, Download } from "lucide-react";

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/C2Nq4VqH9NILVxKwvfsRpZ", "_blank");
  };

  const handleBettingClick = () => {
    window.open("https://media1.placard.co.mz/redirect.aspx?pid=3319&bid=1690", "_blank");
  };

  const handleAviatorClick = () => {
    window.open("https://aviator-app.com/download", "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="container mx-auto max-w-4xl pt-8 md:pt-16">
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Aviator
          </span>
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {/* WhatsApp Button Card */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
                <img
                  src="https://images.unsplash.com/photo-1636751364472-12bfad09b451"
                  alt="WhatsApp"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="mb-4 text-center text-lg font-semibold text-green-600">
                  Junte-se a nós e comece a faturar no Aviator! 💰
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Entre no nosso grupo exclusivo e aprenda as melhores estratégias para ganhar no Aviator
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg"
                >
                  <SiWhatsapp className="h-5 w-5" />
                  Entrar no Grupo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Betting Site Card */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                  src="/images/aviator-game.jpg"
                  alt="Aviator Game"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="mb-4 text-center text-lg font-semibold text-blue-600">
                  A Melhor Casa de Apostas em Moçambique! 🎯
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Registre-se na casa de apostas mais confiável para jogar Aviator e receba bônus exclusivos
                </p>
                <Button
                  onClick={handleBettingClick}
                  className="w-full gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  Registrar Agora
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Aviator App Card */}
          <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600">
                <img
                  src="/Screenshot_20250226-083305_Chrome.jpg"
                  alt="Mega Bot Aviator"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="mb-4 text-center text-lg font-semibold text-purple-600">
                  Maximize Seus Ganhos no Aviator! 🚀
                </h3>
                <p className="mb-4 text-center text-sm text-gray-600">
                  Baixe agora nosso aplicativo exclusivo e aumente suas chances de ganhar no Aviator
                </p>
                <Button
                  onClick={handleAviatorClick}
                  className="w-full gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg"
                >
                  <Download className="h-5 w-5" />
                  Baixar Aplicativo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}