<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Milestone;
use App\Models\User;
use App\Repositories\MilestoneRepositoryInterface;
use app\Repositories\UserRepositoryInterface;

class MilestoneService implements MilestoneServiceInterface
{
    public function __construct(
        private MilestoneRepositoryInterface $milestoneRepository,
        private UserRepositoryInterface $userRepository,

    )
    {}

    public function storeMilestone(
        string $name,
        string $description,
        string $status,
        string $duedata,
    ): bool
    {
        $milestone = [
            'name' => $name,
            'description' => $description,
            'status' => $status,
            'due_data' => $duedata,
        ];
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->storeMilestone($user, $milestone);
    }

    public function updateMilestone(
        string $id,
        string $name,
        string $description,
        string $status,
        string $duedata,
    ): bool
    {
        $milestone = [
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'status' => $status,
            'due_data' => $duedata,
        ];
        $user = $this->userRepository->fetchAuthUser();
        return $this->milestoneRepository->updateMilestone($user, $milestone);
    }

    public function deleteMilestone(Milestone $milestone): bool
    {
        return $this->milestoneRepository->deleteMilestone($milestone);
    }

    public function fetchUserMilestone(): string
    {
        $user = $this->userRepository->fetchAuthUser();
        $milestones = $this->milestoneRepository->fetchUserMilestone($user);
        return json_encode($milestones->toArray());
    }

    public function findMilestone(Milestone $milestone): Milestone
    {
        return $this->findMilestone($milestone);
    }
}