import React, { useState } from "react";
import {Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text} from "@chakra-ui/react";
import { Milestone1 } from "../../types/Milestone1";
import axios from "axios";
import { useNavigate } from "react-router-dom"

type CreateMilestone1FormProps = {
    milestone: Milestone1;
    setMilestone: React.Dispatch<React.SetStateAction<Milestone1>>;
};

const CreateMilestone1Form: React.FC<CreateMilestone1FormProps> = ({
                                                                       milestone,
                                                                       setMilestone,
                                                                   }) => {
    const navigate = useNavigate()
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMilestone((prevMilestone) => ({
            ...prevMilestone,
            [name]: value,
        }));
        console.log(milestone)
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
            if (!csrfToken) {
                console.error("CSRF token not found.");
                return;
            }

            const response = await axios.post("/api/milestone/store", milestone, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            if (response.status === 200) {
                // リクエストが成功した場合の処理
                const data = response.data;
                console.log("Milestone created successfully:", data);
                navigate('/index/milestone1');
            } else {
                // リクエストが失敗した場合の処理
                console.error("Failed to create Milestone");
                // エラー処理を追加する
            }
        } catch (error) {
            console.error("Error occurred while creating Milestone:", error);
            // エラー処理を追加する
        }
    };

    return (
        <Flex align="center" justify="center">
            <Box as="form" onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input type="text" name="name" value={milestone.name} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Description:</FormLabel>
                        <Input type="textarea" name="description" value={milestone.description || ""} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Status:</FormLabel>
                        <Input type="number" name="status" value={milestone.status} onChange={handleInputChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Deadline:</FormLabel>
                        <Input type="date" name="due_date" value={milestone.due_date} onChange={handleInputChange} />
                    </FormControl>
                    <Button type="submit" >Create Milestone</Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default CreateMilestone1Form;
