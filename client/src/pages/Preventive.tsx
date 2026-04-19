import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Preventive() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [price, setPrice] = useState("50");

  const totalArea = (parseFloat(length) || 0) * (parseFloat(height) || 0);
  const totalPrice = totalArea * (parseFloat(price) || 0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md bg-white text-black">
        <CardHeader className="bg-blue-600 text-white text-center py-4">
          <CardTitle className="text-xl font-bold">Calculator Preventiv Pereți</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4 text-left">
          <div className="space-y-2">
            <Label>Lungime Perete (metri)</Label>
            <Input type="number" placeholder="Ex: 5" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Înălțime Perete (metri)</Label>
            <Input type="number" placeholder="Ex: 2,5" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Preț pe m² (RON)</Label>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="pt-4 border-t border-gray-100 mt-4">
            <p className="text-sm text-gray-500 font-medium">Suprafață: {totalArea.toFixed(2)} m²</p>
            <p className="text-2xl font-black text-blue-600">Total: {totalPrice.toLocaleString()} RON</p>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 mt-2">
            Imprimă Preventivul
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}