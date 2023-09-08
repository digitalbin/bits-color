import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import RandomShape from "@/components/RandomShape";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { getBackgroundColor, isValidHex } from "@/utils";

const colors = [
  // Grapefruit
  "#fc7051",
  "#f5af98",
  // Kiwi
  "#64d684",
  "#98f5c3",
  // Tangerine
  "#f7ab1b",
  "#ffe08f",
  // Sand
  "#f8e6cf",
  "#fef9f4",
  // Kahki
  "#e3d2b8",
  "#f9f1ea",
];

export default function ColorPicker() {
  const [hex, setHex] = useState<string>(colors[0]);
  const [inputValue, setInputValue] = useState<string>(hex);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newHex = data.get("hex") as string;
    setHex(newHex);
  };

  const setRandomColor = () => {
    const newColors = colors.filter((color) => color !== hex);
    const newColor = newColors[Math.floor(Math.random() * newColors.length)];
    setHex(newColor);
    setInputValue(newColor);
  };

  return (
    <motion.div
      className="flex w-full h-full md:w-auto md:h-auto flex-col md:flex-row gap-12 border-neutral-300 p-12 rounded-lg shadow-lg justify-center"
      animate={{ backgroundColor: getBackgroundColor(hex) }}
    >
      <div className="grid gap-2 content-center">
        <h2>Select color</h2>
        <form onSubmit={handleSubmit} className="flex gap-1">
          <Input
            name="hex"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={7}
            isValid={isValidHex(hex)}
          />
          <button type="submit" className="bg-violet-500 rounded px-4">
            ✨
          </button>
        </form>
        <span className="text-neutral-500 text-xs">
          Insert a{" "}
          <span
            className={!isValidHex(hex) ? "underline text-red-400" : undefined}
          >
            valid
          </span>{" "}
          HEX code to generate the color
        </span>
        <Divider>or</Divider>
        <Button onClick={setRandomColor}>Randomize Color</Button>
      </div>
      <div className="grid place-items-center">
        <RandomShape color={hex} />
      </div>
    </motion.div>
  );
}
