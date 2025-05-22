import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const GiftCard = ({ gift, onReserve }) => {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleReserve = () => {
    if (name.trim() === "") {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome para reservar este presente.",
        variant: "destructive",
      });
      return;
    }

    onReserve(gift.id, name);
    setName("");
    setOpen(false);

    toast({
      title: "Presente reservado!",
      description: `Você reservou ${gift.gift}. Obrigado!`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="gift-card"
    >
      <Card
        className={`h-full ${
          gift.reserved ? "bg-secondary/50" : "bg-card"
        } border-2 ${
          gift.reserved ? "border-primary/30" : "border-primary/10"
        }`}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-primary">
              {gift.gift}
            </CardTitle>
            <Badge variant={gift.reserved ? "secondary" : "default"}>
              {gift.reserved ? "Reservado" : "Disponível"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {gift.reserved && (
              <div className="mt-4 p-2 bg-accent rounded-md">
                <p className="text-sm font-medium">Reservado por:</p>
                <p className="font-semibold text-primary">{gift.reservedBy}</p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full"
                variant={gift.reserved ? "secondary" : "default"}
                disabled={gift.reserved}
              >
                {gift.reserved ? "Já Reservado" : "Reservar Presente"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Reservar Presente</DialogTitle>
                <DialogDescription>
                  Você está reservando {gift.gift}. Por favor, informe seu nome
                  para confirmar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleReserve}>
                  Confirmar Reserva
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default GiftCard;
