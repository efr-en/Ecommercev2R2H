import { Container, Title, TextInput, Textarea, Button, Group, Text } from "@mantine/core";
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

    
}