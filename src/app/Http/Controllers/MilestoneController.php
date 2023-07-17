<?php

namespace App\Http\Controllers;

use App\Http\Requests\MilestoneRequest;
use App\Repositories\UserRepositoryInterface;
use App\Services\MilestoneServiceInterface;
use Illuminate\Http\Request;

class MilestoneController extends Controller
{
    public function __construct(
        private UserRepositoryInterface $userRepository,
        private MilestoneServiceInterface $milestoneService,
    )
    {

    }

    public function index()
    {
        $milestones = $this->milestoneService->fetchUserMilestone();
        return response()->json($milestones);
    }

    public function store(MilestoneRequest $request)
    {
        $response = $this->milestoneService->storeMilestone(
            $request->getName(),
            $request->getDescription(),
            $request->getStatus(),
            $request->getDuedata(),
        );

        return response()->json($response);
    }

    public function update(MilestoneRequest $request)
    {
        $response = $this->milestoneService->updateMilestone(
            $request->getId(),
            $request->getName(),
            $request->getDescription(),
            $request->getStatus(),
            $request->getDuedata(),
        );

        return response()->json($response);
    }

    public function delete()
    {

    }
}
