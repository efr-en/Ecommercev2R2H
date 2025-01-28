import { useState, useEffect } from 'react';
import { Container, Grid, TextInput, Select, Title, Card, Image, Text, Button } from '@mantine/core';

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

    return (
        <Container size="lg" style={{ marginTop: "2rem" }}>
            <Title order={1} align="center" style={{ marginBottom: "2rem" }}>
                Products
            </Title>

            {/* Filter Products */}
            <Grid style={{ marginBottom: "2rem" }}>
                <Grid.Col span={6}>
                    <TextInput
                    placeholder="Max Price"
                    label="Price Filter"
                    onChange={(e) => handleFilterChange("price", e.target.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Select
                    label="Product Type"
                    placeholder="Choose a type"
                    data={[
                        { value: "deck", label: "Deck"},
                        { value: "shoes", label: "Shoes"},
                    ]}
                    onChange={(value) => handleFilterChange("type", value)}
                    />
                </Grid.Col>
            </Grid>

            {/* Products Card Grid */}
            <Grid>
                {products.map((product) => (
                    <Grid.Col key={product.id} span={4}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image src={product.image} alt={product.title} height={400} />
                            </Card.Section>

                            <Text weight={500} size="lg" style={{ marginBottom: "1rem" }}>
                                {product.title}
                            </Text>
                            <Text size="sm" color="dimmed" style={{ marginBottom: "1rem" }}>
                                {product.description}
                            </Text>
                            <Text weight={700} size="md">
                                ${product.price}
                            </Text>
                            <Button variant="light" fullWidth style={{ marginTop: "1rem" }}>
                                Add to Cart
                            </Button>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
            <Text size='md' align='center'>
            Looking for something we don't carry? Please <a href='/contact'>Contact Us</a>
        </Text>
        </Container>
    );
};

export default Products;