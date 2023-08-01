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
                'status' => 30,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 2,
                'milestone_id' => 1,
                'name' => 'フロントエンドを学習する、',
                'description' => '',
                'status' => 20,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 3,
                'milestone_id' => 1,
                'name' => 'インフラを学習する、',
                'description' => '',
                'status' => 10,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 4,
                'milestone_id' => 2,
                'name' => 'お金を貯める',
                'description' => '５年以内に500万円貯める',
                'status' => 50,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 5,
                'milestone_id' => 2,
                'name' => '外国語を勉強する',
                'description' => '世界一周する際に必要な語学を学ぶ',
                'status' => 80,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 6,
                'milestone_id' => 2,
                'name' => 'ともに旅するパートナーを見つける',
                'description' => '世界１周を一緒に旅できるパートナーを探し出す。',
                'status' => 1,
                'due_date' => Carbon::parse('2023-09-01'),
            ],
            [
                'id' => 7,
                'milestone_id' => 3,
                'name' => 'フロント表示',
                'description' => '綺麗にしたい。',
                'status' => 20,
                'due_date' => Carbon::parse('2023-08-03'),
            ],
            [
                'id' => 8,
                'milestone_id' => 3,
                'name' => 'バックエンド処理',
                'description' => 'もっと細かい処理を追加したい。',
                'status' => 20,
                'due_date' => Carbon::parse('2023-08-03'),
            ],

        ]);
    }
}
