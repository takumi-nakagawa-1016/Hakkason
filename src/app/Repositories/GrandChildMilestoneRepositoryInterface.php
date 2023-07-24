<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\GrandChildMilestone;
use Illuminate\Support\Collection;

interface GrandChildMilestoneRepositoryInterface
{
    public function storeGrandChild(array $grandChild): bool;

    public function updateGrandChild(GrandChildMilestone $grandChild): bool;

    public function deleteGrandChild(GrandChildMilestone $grandChild): bool;

    public function findGrandChild(string $id): GrandChildMilestone;

    public function fetchGrandChildOfChild(string $childMilestoneId): Collection;
}
