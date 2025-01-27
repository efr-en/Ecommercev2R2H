import { useState, useEffect } from "react";
import { Container, Grid, TextInput, Select, Title, Card, Image, Text, Button } from "@mantine/core";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ price: "", type: "" });

    useEffect(() => {
        const query = new URLSearchParams(filters).toString();
        fetch(`http://localhost:5000/api/products?${query}`) //change to hosted DB
            .then((res) => res.json())
            .then((data) => setProducts(data)); //grabs product data and sets it
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    return
}