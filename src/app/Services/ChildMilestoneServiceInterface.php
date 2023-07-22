<?php

declare(strict_types=1);

namespace App\Services;

interface ChildMilestoneServiceInterface
{
    public function storeChild(
        string $milestoneId,
        string $name,
        string $description,
        string $due_date
    ): bool;

    public function updateChild(
        string $childId,
        string $name,
        string $description,
        string $status,
        string $due_date,
    ): bool;

    public function deleteChild(
        string $id,
    ): bool;

    public function updateChildStatus(
        string $id,
//        Todo ここちょっと微妙、Enum使いたい部分。
        int $status,
    ): bool;
}