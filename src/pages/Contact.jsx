import { Container, Title, TextInput, Textarea, Button, Group, Text } from '@mantine/core';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", comment: ""});
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email.";
        } 
        if (!formData.comment) errors.comment = "Comment is required.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({})
            setSuccessMessage("Thank you for contacting us. We will get back to you soon!");
            setFormData({ name: "", email: "", comment: "" });
        }
    };

    // The form's visual layout
    return (
        <Container size="sm" style={{ marginTop: "2rem" }}>
            <Title align="Center" order={1} style={{ marginBottom: "2rem" }}>
                Contact Us
            </Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                label="Name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                />
                <TextInput
                label="Email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                style={{ marginTop: "1rem" }}
                />
                <Textarea
                label="Comment"
                name="comment"
                placeholder="Your message"
                value={formData.comment}
                onChange={handleChange}
                error={errors.comment}
                required
                style={{ marginTop: "1rem" }}
                />
                <Group position="center" style={{ marginTop: "1rem" }}>
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
            {successMessage && (
                <Text color="green" align="center" style={{ marginTop: "1rem" }}>
                    {successMessage}
                </Text>
            )}
        </Container>
    );
};

export default Contact;