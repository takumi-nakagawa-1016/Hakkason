import React, { useState } from "react";
import {Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text} from "@chakra-ui/react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import {Milestone3} from "../../types/Milestone3";

type CreateMilestone3FormProps = {
    milestone: Milestone3;
    setMilestone: React.Dispatch<React.SetStateAction<Milestone3>>;
};

const CreateMilestone3Form: React.FC<CreateMilestone3FormProps> = ({
                                                                       milestone,
                                                                       setMilestone,
                                                                   }) => {
    const navigate = useNavigate()
    const params = useParams()
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

            const response = await axios.post("/api/grand-child-milestone/store", milestone, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            if (response.status === 200) {
                // リクエストが成功した場合の処理
                const data = response.data;
                console.log("Milestone created successfully:", data);
                navigate(`/index/milestone3/${milestone.child_milestone_id}`);
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

    const handleToIndex = () => {
        navigate(`/index/milestone2/${milestone.child_milestone_id}`);
    }

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
                    <input type="hidden" name="child_milestone_id" value={params.child_milestone_id} />
                    <Button type="submit" >Create Milestone</Button>
                    <Button onClick={handleToIndex}  colorScheme="blue">→ 3rd Milestones</Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default CreateMilestone3Form;
