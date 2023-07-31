<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChildMilestoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('child_milestones')->insert([
            [
                'id' => 1,
                'milestone_id' => 1,
                'name' => 'バックエンドを学習する。',
                'description' => '',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 2,
                'milestone_id' => 1,
                'name' => 'フロントエンドを学習する、',
                'description' => '',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 3,
                'milestone_id' => 1,
                'name' => 'インフラを学習する、',
                'description' => '',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 4,
                'milestone_id' => 2,
                'name' => 'お金を貯める',
                'description' => '５年以内に500万円貯める',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 5,
                'milestone_id' => 2,
                'name' => '外国語を勉強する',
                'description' => '世界一周する際に必要な語学を学ぶ',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 6,
                'milestone_id' => 2,
                'name' => 'ともに旅するパートナーを見つける',
                'description' => '世界１周を一緒に旅できるパートナーを探し出す。',
                'status' => 0,
                'due_date' => Carbon::parse('2023-09-01'),
            ],

        ]);
    }
}
