import { Box, Flex, ScrollArea, Table } from "@mantine/core";
import React, { useState } from "react";
import "./Home.css";
interface IElement {
  name: string;
  position: string;
  symbol: string;
  mass: number;
}

const elementsLong: IElement[] = [
  { position: "1", name: "Hydrogen", symbol: "H", mass: 1.008 },
  { position: "2", name: "Helium", symbol: "He", mass: 4.0026 },
  { position: "3", name: "Lithium", symbol: "Li", mass: 6.94 },
  { position: "4", name: "Beryllium", symbol: "Be", mass: 9.0122 },
  { position: "5", name: "Boron", symbol: "B", mass: 10.81 },
  { position: "6", name: "Carbon", symbol: "C", mass: 12.011 },
  { position: "7", name: "Nitrogen", symbol: "N", mass: 14.007 },
  { position: "8", name: "Oxygen", symbol: "O", mass: 15.999 },
  { position: "9", name: "Fluorine", symbol: "F", mass: 18.998 },
  { position: "10", name: "Neon", symbol: "Ne", mass: 20.18 },
  { position: "11", name: "Sodium", symbol: "Na", mass: 22.99 },
  { position: "12", name: "Magnesium", symbol: "Mg", mass: 24.305 },
  { position: "13", name: "Aluminum", symbol: "Al", mass: 26.982 },
  { position: "14", name: "Silicon", symbol: "Si", mass: 28.085 },
  { position: "15", name: "Phosphorus", symbol: "P", mass: 30.974 },
  { position: "16", name: "Sulfur", symbol: "S", mass: 32.06 },
  { position: "17", name: "Chlorine", symbol: "Cl", mass: 35.45 },
  { position: "18", name: "Argon", symbol: "Ar", mass: 39.948 },
  { position: "19", name: "Potassium", symbol: "K", mass: 39.098 },
  { position: "20", name: "Calcium", symbol: "Ca", mass: 40.078 },
  { position: "21", name: "Scandium", symbol: "Sc", mass: 44.956 },
  { position: "22", name: "Titanium", symbol: "Ti", mass: 47.867 },
  { position: "23", name: "Vanadium", symbol: "V", mass: 50.942 },
  { position: "24", name: "Chromium", symbol: "Cr", mass: 51.996 },
  { position: "25", name: "Manganese", symbol: "Mn", mass: 54.938 },
  { position: "26", name: "Iron", symbol: "Fe", mass: 55.845 },
  { position: "27", name: "Cobalt", symbol: "Co", mass: 58.933 },
  { position: "28", name: "Nickel", symbol: "Ni", mass: 58.693 },
  { position: "29", name: "Copper", symbol: "Cu", mass: 63.546 },
  { position: "30", name: "Zinc", symbol: "Zn", mass: 65.38 }
];

const Home = () => {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Flex direction={{ base: "column" }} gap={{ base: "sm", sm: "lg" }} h="100%">
      <Box w="100%" h={60} className="border-2" />
      <Table.ScrollContainer minWidth="auto" maxHeight="100%">
        <Table stickyHeader stickyHeaderOffset={0}>
          <Table.Thead bg="gray.5">
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Atomic mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Flex>
  );
};

export default Home;
