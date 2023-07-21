<?php

declare(strict_types=1);

namespace App\Services;

class ChildMilestoneService implements ChildMilestoneServiceInterface
{
    public function __construct(
        private
    )
    {}

    public function storeChild(string $milestoneId, string $name, string $description, string $due_date): bool
    {
        // TODO: Implement storeChild() method.
    }

    public function updateChild(string $childId, string $name, string $description, string $status, string $due_date,): bool
    {
        // TODO: Implement updateChild() method.
    }

    public function deleteChild(string $id,): bool
    {
        // TODO: Implement deleteChild() method.
    }
}