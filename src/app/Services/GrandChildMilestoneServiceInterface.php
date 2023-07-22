<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\GrandchildMilestone;
use Illuminate\Support\Collection;

interface GrandChildMilestoneServiceInterface
{
    public function storeGrandChild(
        string $childMilestoneId,
        string $name,
        string $description,
        string $due_date,
    ): bool;

    public function updateGrandChild(
        string $id,
        string $name,
        string $description,
        string $status,
        string $due_date
    ): bool;

    public function deleteGrandChild(
        string $id
    ): bool;

    public function fetchGrandChildOfChild(
        string $childMilestoneId
    ): Collection;

}