<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GrandChildMilestoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('grandchild_milestones')->insert([
            [
                'id' => 1,
                'child_milestone_id' => 1,
                'name' => 'PHP技術者認定ウィザード合格',
                'description' => '３年以内にPHP資格の最上位取得を目指す。',
                'status' => 45,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 2,
                'child_milestone_id' => 1,
                'name' => 'Python3 エンジニア認定基礎試験合格',
                'description' => '1年以内にpythonの資格取得を目指す。',
                'status' => 68,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 3,
                'child_milestone_id' => 2,
                'name' => '実務レベルのReactを身につける',
                'description' => '２年以内にフロントエンジニアとも遜色ない技術力習得を目指す。',
                'status' => 54,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 4,
                'child_milestone_id' => 2,
                'name' => '実務レベルのFlutterを身につける',
                'description' => '4年以内に単独でアプリ開発が可能な技術力習得を目指す。',
                'status' => 38,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 5,
                'child_milestone_id' => 3,
                'name' => 'AWS　Professional取得',
                'description' => '4年以内に単独でアプリ開発が可能な技術力習得を目指す。',
                'status' => 10,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 6,
                'child_milestone_id' => 4,
                'name' => '毎月10万貯金',
                'description' => '今月までに70万貯める',
                'status' => 10,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 7,
                'child_milestone_id' => 5,
                'name' => '英語',
                'description' => '毎日１時間勉強',
                'status' => 80,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 8,
                'child_milestone_id' => 5,
                'name' => '中国語',
                'description' => '毎日１時間勉強',
                'status' => 80,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
            [
                'id' => 9,
                'child_milestone_id' => 5,
                'name' => '日本語',
                'description' => '日常で使用する',
                'status' => 100,
                'due_date' => Carbon::parse('2026-08-01'),
            ],
        ]);
    }
}
