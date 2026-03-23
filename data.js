window.initialData = {
  "user": {
    "name": "Alex",
    "streak": 5,
    "workoutsThisWeek": 4
  },
  "plans": [
    {
      "id": "p1",
      "title": "Full Body Calisthenics",
      "goal": "Strength & Control",
      "sessionsPerWeek": 3,
      "difficulty": "Intermediate",
      "tags": ["Calisthenics", "Bodyweight"],
      "sessions": [
        {
          "name": "Day 1 - Push & Core",
          "exercises": [
            { "exerciseId": "e_cal_pullup", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 0 },
            { "exerciseId": "e_chest_pushup", "trackingMode": "reps", "sets": 3, "targetReps": 20, "weight": 0 },
            { "exerciseId": "e_cal_lsit", "trackingMode": "timer", "sets": 3, "durationSec": 30, "weight": 0 }
          ]
        },
        {
          "name": "Day 2 - Pull & Core",
          "exercises": [
            { "exerciseId": "e_cal_muscleup", "trackingMode": "reps", "sets": 3, "targetReps": 5, "weight": 0 },
            { "exerciseId": "e_cal_frontlever", "trackingMode": "timer", "sets": 3, "durationSec": 15, "weight": 0 },
            { "exerciseId": "e_cal_hspu", "trackingMode": "reps", "sets": 3, "targetReps": 8, "weight": 0 }
          ]
        },
        {
          "name": "Day 3 - Legs & Core",
          "exercises": [
            { "exerciseId": "e_cal_pistol", "trackingMode": "reps", "sets": 3, "targetReps": 8, "weight": 0 },
            { "exerciseId": "e_cal_squat_jump", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 0 },
            { "exerciseId": "e_cal_planche", "trackingMode": "timer", "sets": 3, "durationSec": 20, "weight": 0 }
          ]
        }
      ]
    },
    {
      "id": "p2",
      "title": "Push Pull Legs (Gym)",
      "goal": "Hypertrophy",
      "sessionsPerWeek": 6,
      "difficulty": "Advanced",
      "tags": ["Gym", "Weights"],
      "sessions": [
        {
          "name": "Push Day",
          "exercises": [
            { "exerciseId": "e_chest_bench", "trackingMode": "reps", "sets": 4, "targetReps": 8, "weight": 135 },
            { "exerciseId": "e_chest_incline", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 45 },
            { "exerciseId": "e_shoulder_lat", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 25 },
            { "exerciseId": "e_tri_pushdown", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 40 }
          ]
        },
        {
          "name": "Pull Day",
          "exercises": [
            { "exerciseId": "e_back_pulldown", "trackingMode": "reps", "sets": 4, "targetReps": 10, "weight": 100 },
            { "exerciseId": "e_back_row", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 80 },
            { "exerciseId": "e_shoulder_rear", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 60 },
            { "exerciseId": "e_bi_hammer", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 30 }
          ]
        },
        {
          "name": "Legs Day",
          "exercises": [
            { "exerciseId": "e_leg_squat", "trackingMode": "reps", "sets": 4, "targetReps": 8, "weight": 135 },
            { "exerciseId": "e_leg_press", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 200 },
            { "exerciseId": "e_leg_ext", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 90 },
            { "exerciseId": "e_leg_calf", "trackingMode": "reps", "sets": 4, "targetReps": 15, "weight": 100 }
          ]
        }
      ]
    },
    {
      "id": "p3",
      "title": "Beginner Gym Start",
      "goal": "Strength",
      "sessionsPerWeek": 3,
      "difficulty": "Beginner",
      "tags": ["Gym", "Full Body"],
      "sessions": [
        {
          "name": "Full Body A",
          "exercises": [
            { "exerciseId": "e_leg_press", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 100 },
            { "exerciseId": "e_chest_bench", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 45 },
            { "exerciseId": "e_back_pulldown", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 60 }
          ]
        },
        {
          "name": "Full Body B",
          "exercises": [
            { "exerciseId": "e_leg_ext", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 50 },
            { "exerciseId": "e_shoulder_dbpress", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 15 },
            { "exerciseId": "e_back_row", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 50 }
          ]
        }
      ]
    },
    {
      "id": "p4",
      "title": "Classic Bro Split",
      "goal": "Hypertrophy",
      "sessionsPerWeek": 5,
      "difficulty": "Intermediate",
      "tags": ["Gym", "Bodybuilding"],
      "sessions": [
        {
          "name": "Chest Day",
          "exercises": [
            { "exerciseId": "e_chest_bench", "trackingMode": "reps", "sets": 4, "targetReps": 10, "weight": 135 },
            { "exerciseId": "e_chest_incline_mach", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 90 },
            { "exerciseId": "e_chest_fly", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 70 },
            { "exerciseId": "e_chest_dips", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 0 }
          ]
        },
        {
          "name": "Back Day",
          "exercises": [
            { "exerciseId": "e_back_deadlift", "trackingMode": "reps", "sets": 4, "targetReps": 6, "weight": 225 },
            { "exerciseId": "e_cal_pullup", "trackingMode": "reps", "sets": 3, "targetReps": 8, "weight": 0 },
            { "exerciseId": "e_back_row", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 110 },
            { "exerciseId": "e_back_longpull", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 100 }
          ]
        },
        {
          "name": "Shoulders Day",
          "exercises": [
            { "exerciseId": "e_shoulder_dbpress", "trackingMode": "reps", "sets": 4, "targetReps": 10, "weight": 40 },
            { "exerciseId": "e_shoulder_lat", "trackingMode": "reps", "sets": 4, "targetReps": 15, "weight": 20 },
            { "exerciseId": "e_shoulder_rear", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 60 },
            { "exerciseId": "e_shoulder_shrug", "trackingMode": "reps", "sets": 4, "targetReps": 12, "weight": 60 }
          ]
        },
        {
          "name": "Legs Day",
          "exercises": [
            { "exerciseId": "e_leg_squat", "trackingMode": "reps", "sets": 4, "targetReps": 8, "weight": 185 },
            { "exerciseId": "e_leg_rdl", "trackingMode": "reps", "sets": 3, "targetReps": 10, "weight": 135 },
            { "exerciseId": "e_leg_press", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 250 },
            { "exerciseId": "e_leg_calf", "trackingMode": "reps", "sets": 4, "targetReps": 15, "weight": 100 }
          ]
        },
        {
          "name": "Arms Day",
          "exercises": [
            { "exerciseId": "e_bi_ez", "trackingMode": "reps", "sets": 4, "targetReps": 10, "weight": 60 },
            { "exerciseId": "e_tri_pushdown", "trackingMode": "reps", "sets": 4, "targetReps": 12, "weight": 50 },
            { "exerciseId": "e_bi_hammer", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 35 },
            { "exerciseId": "e_tri_ext", "trackingMode": "reps", "sets": 3, "targetReps": 12, "weight": 50 }
          ]
        }
      ]
    },
    {
      "id": "p5",
      "title": "Advanced Skills (Calisthenics)",
      "goal": "Skill Acquisition",
      "sessionsPerWeek": 4,
      "difficulty": "Advanced",
      "tags": ["Calisthenics", "Skills"],
      "sessions": [
        {
          "name": "Planche & Front Lever",
          "exercises": [
            { "exerciseId": "e_cal_straddle_planche", "trackingMode": "timer", "sets": 5, "durationSec": 10, "weight": 0 },
            { "exerciseId": "e_cal_frontlever", "trackingMode": "timer", "sets": 5, "durationSec": 10, "weight": 0 },
            { "exerciseId": "e_cal_tuck_planche", "trackingMode": "timer", "sets": 3, "durationSec": 20, "weight": 0 },
            { "exerciseId": "e_cal_dragon_flag", "trackingMode": "reps", "sets": 3, "targetReps": 8, "weight": 0 }
          ]
        },
        {
          "name": "One Arm & Muscle Ups",
          "exercises": [
            { "exerciseId": "e_cal_oap", "trackingMode": "reps", "sets": 3, "targetReps": 3, "weight": 0 },
            { "exerciseId": "e_cal_muscleup", "trackingMode": "reps", "sets": 4, "targetReps": 5, "weight": 0 },
            { "exerciseId": "e_cal_ring_mu", "trackingMode": "reps", "sets": 3, "targetReps": 4, "weight": 0 },
            { "exerciseId": "e_cal_pullup", "trackingMode": "reps", "sets": 3, "targetReps": 15, "weight": 0 }
          ]
        }
      ]
    },
    {
      "id": "p6",
      "title": "Home Core Crusher",
      "goal": "Core Strength",
      "sessionsPerWeek": 2,
      "difficulty": "Beginner",
      "tags": ["Home", "Core"],
      "sessions": [
        {
          "name": "Abs 360",
          "exercises": [
            { "exerciseId": "e_core_crunch", "trackingMode": "reps", "sets": 3, "targetReps": 20, "weight": 0 },
            { "exerciseId": "e_cal_hollow", "trackingMode": "timer", "sets": 3, "durationSec": 45, "weight": 0 },
            { "exerciseId": "e_core_plank", "trackingMode": "timer", "sets": 3, "durationSec": 60, "weight": 0 },
            { "exerciseId": "e_core_russian_twist", "trackingMode": "reps", "sets": 3, "targetReps": 20, "weight": 0 }
          ]
        }
      ]
    }
  ],
  "exercises": [
    { "id": "e_chest_incline", "name": "Incline Press", "category": "gym", "primaryMuscle": "Chest", "equipment": "Barbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 45 },
    { "id": "e_chest_incline_mach", "name": "Incline Press Machine", "category": "gym", "primaryMuscle": "Chest", "equipment": "Machine", "image": "⚙️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 45 },
    { "id": "e_chest_bench", "name": "Bench Press (Жим лежа)", "category": "gym", "primaryMuscle": "Chest", "equipment": "Barbell", "image": "🏋️", "defaultSets": 4, "defaultReps": 8, "defaultWeight": 30 },
    { "id": "e_chest_pushup", "name": "Pushups", "category": "calisthenics", "primaryMuscle": "Chest", "equipment": "Bodyweight", "image": "💪", "defaultSets": 3, "defaultReps": 20, "defaultWeight": 0 },
    { "id": "e_chest_fly", "name": "Pec Fly", "category": "gym", "primaryMuscle": "Chest", "equipment": "Machine", "image": "🦅", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 70 },
    { "id": "e_chest_dips", "name": "Dips", "category": "calisthenics", "primaryMuscle": "Chest", "equipment": "Bodyweight", "image": "💪", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 0 },
    { "id": "e_chest_ring_dips", "name": "Ring Dips", "category": "calisthenics", "primaryMuscle": "Chest", "equipment": "Rings", "image": "⭕", "defaultSets": 3, "defaultReps": 8, "defaultWeight": 0 },
    { "id": "e_chest_cable_cross", "name": "Cable Crossover", "category": "gym", "primaryMuscle": "Chest", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 40 },
    { "id": "e_chest_db_bench", "name": "DB Bench Press", "category": "gym", "primaryMuscle": "Chest", "equipment": "Dumbbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 40 },
    
    { "id": "e_shoulder_conv", "name": "Converging Shoulder Press", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Machine", "image": "⚙️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 50 },
    { "id": "e_shoulder_lat", "name": "Lateral Raise", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Dumbbell", "image": "👐", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 20 },
    { "id": "e_shoulder_rear", "name": "Rear Delt", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Machine", "image": "🦋", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 60 },
    { "id": "e_shoulder_shrug", "name": "DB Shrugs", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Dumbbell", "image": "🤷", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 50 },
    { "id": "e_shoulder_dbpress", "name": "Жим гантелей стоя (Standing DB Press)", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Dumbbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 20 },
    { "id": "e_shoulder_side", "name": "Махи в сторону (Side Raises)", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Dumbbell", "image": "👐", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 20 },
    { "id": "e_cal_hspu", "name": "Handstand Pushups", "category": "calisthenics", "primaryMuscle": "Shoulders", "equipment": "Bodyweight", "image": "🤸", "defaultSets": 3, "defaultReps": 5, "defaultWeight": 0 },
    { "id": "e_cal_pike", "name": "Pike Pushups", "category": "calisthenics", "primaryMuscle": "Shoulders", "equipment": "Bodyweight", "image": "🔼", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 0 },
    { "id": "e_shoulder_facepull", "name": "Face Pulls", "category": "gym", "primaryMuscle": "Shoulders", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 40 },
    
    { "id": "e_tri_pushdown", "name": "Pushdown (с касой)", "category": "gym", "primaryMuscle": "Triceps", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 30 },
    { "id": "e_tri_ext", "name": "Triceps Extension", "category": "gym", "primaryMuscle": "Triceps", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 50 },
    { "id": "e_tri_pressdown", "name": "Triceps Pressdown", "category": "gym", "primaryMuscle": "Triceps", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 40 },
    { "id": "e_tri_kickback", "name": "Triceps Kickbacks", "category": "gym", "primaryMuscle": "Triceps", "equipment": "Dumbbell", "image": "💪", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 15 },
    { "id": "e_tri_skullcrusher", "name": "Skullcrushers", "category": "gym", "primaryMuscle": "Triceps", "equipment": "Barbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 40 },
    
    { "id": "e_back_pulldown", "name": "Pulldown (block or regular)", "category": "gym", "primaryMuscle": "Back", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 100 },
    { "id": "e_back_row", "name": "Row", "category": "gym", "primaryMuscle": "Back", "equipment": "Cable", "image": "🚣", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 80 },
    { "id": "e_back_longpull", "name": "Longpull 302 (Самая не любимая спина)", "category": "gym", "primaryMuscle": "Back", "equipment": "Machine", "image": "⚙️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 80 },
    { "id": "e_cal_pullup", "name": "Подтягивание (Pull-ups)", "category": "calisthenics", "primaryMuscle": "Back", "equipment": "Bodyweight", "image": "🧗", "defaultSets": 3, "defaultReps": 8, "defaultWeight": 0 },
    { "id": "e_back_thing", "name": "Штука для спины", "category": "gym", "primaryMuscle": "Back", "equipment": "Machine", "image": "⚙️", "defaultSets": 4, "defaultReps": 20, "defaultWeight": 60 },
    { "id": "e_cal_frontlever", "name": "Front Lever", "category": "calisthenics", "primaryMuscle": "Back", "equipment": "Bodyweight", "image": "🤸", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 10 },
    { "id": "e_back_deadlift", "name": "Deadlift", "category": "gym", "primaryMuscle": "Back", "equipment": "Barbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 5, "defaultWeight": 135 },
    { "id": "e_cal_oap", "name": "One Arm Pullup", "category": "calisthenics", "primaryMuscle": "Back", "equipment": "Bodyweight", "image": "🧗", "defaultSets": 3, "defaultReps": 3, "defaultWeight": 0 },
    { "id": "e_back_tbar", "name": "T-Bar Row", "category": "gym", "primaryMuscle": "Back", "equipment": "Barbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 90 },
    
    { "id": "e_bi_curl", "name": "Biceps (стоя / гантелями)", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Dumbbell", "image": "💪", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 20 },
    { "id": "e_bi_ez", "name": "Кривая штанга стоя (EZ Bar)", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Barbell", "image": "〰️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 30 },
    { "id": "e_bi_hammer", "name": "Hammer Curls (Молоточки)", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Dumbbell", "image": "🔨", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 20 },
    { "id": "e_bi_preacher", "name": "Biceps Sitting with table", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Machine", "image": "💪", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 20 },
    { "id": "e_bi_ext", "name": "Biceps Extension", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Cable", "image": "⛓️", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 30 },
    { "id": "e_bi_concentration", "name": "Concentration Curls", "category": "gym", "primaryMuscle": "Biceps", "equipment": "Dumbbell", "image": "💪", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 15 },
    
    { "id": "e_leg_squat", "name": "Squats (Приседания)", "category": "gym", "primaryMuscle": "Legs", "equipment": "Barbell", "image": "🦵", "defaultSets": 4, "defaultReps": 8, "defaultWeight": 40 },
    { "id": "e_leg_ext", "name": "Leg Extension", "category": "gym", "primaryMuscle": "Legs", "equipment": "Machine", "image": "⚙️", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 90 },
    { "id": "e_leg_calf", "name": "Ikri (Calves)", "category": "gym", "primaryMuscle": "Legs", "equipment": "Machine", "image": "🦵", "defaultSets": 4, "defaultReps": 15, "defaultWeight": 100 },
    { "id": "e_leg_press", "name": "Leg Press", "category": "gym", "primaryMuscle": "Legs", "equipment": "Machine", "image": "🦵", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 150 },
    { "id": "e_leg_inner", "name": "Inner Thigh", "category": "gym", "primaryMuscle": "Legs", "equipment": "Machine", "image": "🦵", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 50 },
    { "id": "e_leg_outer", "name": "Outer Thigh", "category": "gym", "primaryMuscle": "Legs", "equipment": "Machine", "image": "🦵", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 50 },
    { "id": "e_cal_pistol", "name": "Pistol Squats", "category": "calisthenics", "primaryMuscle": "Legs", "equipment": "Bodyweight", "image": "🦵", "defaultSets": 3, "defaultReps": 5, "defaultWeight": 0 },
    { "id": "e_cal_squat_jump", "name": "Jump Squats", "category": "calisthenics", "primaryMuscle": "Legs", "equipment": "Bodyweight", "image": "🦵", "defaultSets": 3, "defaultReps": 15, "defaultWeight": 0 },
    { "id": "e_leg_rdl", "name": "Romanian Deadlift", "category": "gym", "primaryMuscle": "Legs", "equipment": "Barbell", "image": "🏋️", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 135 },
    { "id": "e_leg_front_squat", "name": "Front Squat", "category": "gym", "primaryMuscle": "Legs", "equipment": "Barbell", "image": "🦵", "defaultSets": 3, "defaultReps": 8, "defaultWeight": 135 },
    { "id": "e_leg_hip_thrust", "name": "Hip Thrust", "category": "gym", "primaryMuscle": "Legs", "equipment": "Barbell", "image": "🍑", "defaultSets": 3, "defaultReps": 12, "defaultWeight": 135 },
    { "id": "e_leg_bulgarian", "name": "Bulgarian Split Squats", "category": "gym", "primaryMuscle": "Legs", "equipment": "Dumbbell", "image": "🦵", "defaultSets": 3, "defaultReps": 10, "defaultWeight": 30 },
    { "id": "e_leg_lunges", "name": "Walking Lunges", "category": "gym", "primaryMuscle": "Legs", "equipment": "Dumbbell", "image": "🦵", "defaultSets": 3, "defaultReps": 20, "defaultWeight": 25 },

    { "id": "e_cal_muscleup", "name": "Muscle Up", "category": "calisthenics", "primaryMuscle": "Full Body", "equipment": "Bodyweight", "image": "🔥", "defaultSets": 3, "defaultReps": 3, "defaultWeight": 0 },
    { "id": "e_cal_ring_mu", "name": "Ring Muscle Up", "category": "calisthenics", "primaryMuscle": "Full Body", "equipment": "Rings", "image": "⭕", "defaultSets": 3, "defaultReps": 3, "defaultWeight": 0 },
    { "id": "e_cal_lsit", "name": "L-Sit", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🧘", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 20 },
    { "id": "e_cal_planche", "name": "Planche", "category": "calisthenics", "primaryMuscle": "Shoulders", "equipment": "Bodyweight", "image": "🤸", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 10 },
    { "id": "e_cal_tuck_planche", "name": "Tuck Planche", "category": "calisthenics", "primaryMuscle": "Shoulders", "equipment": "Bodyweight", "image": "🤸", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 20 },
    { "id": "e_cal_straddle_planche", "name": "Straddle Planche", "category": "calisthenics", "primaryMuscle": "Shoulders", "equipment": "Bodyweight", "image": "🤸", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 15 },
    { "id": "e_cal_human_flag", "name": "Human Flag", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🚩", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 10 },
    { "id": "e_cal_dragon_flag", "name": "Dragon Flag", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🐉", "defaultSets": 3, "defaultReps": 8, "defaultWeight": 0 },
    { "id": "e_core_crunch", "name": "Crunches", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🧘", "defaultSets": 3, "defaultReps": 20, "defaultWeight": 0 },
    { "id": "e_core_plank", "name": "Plank", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🧘", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 60 },
    { "id": "e_cal_hollow", "name": "Hollow Body Hold", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🧘", "defaultSets": 3, "defaultReps": 0, "defaultWeight": 0, "durationSec": 45 },
    { "id": "e_core_russian_twist", "name": "Russian Twists", "category": "calisthenics", "primaryMuscle": "Core", "equipment": "Bodyweight", "image": "🌪️", "defaultSets": 3, "defaultReps": 20, "defaultWeight": 0 }
  ],
  "schedule": {},
  "workoutHistory": [],
  "progressStats": {},
  "sharedTemplates": [],
  "uiSettings": {
    "theme": "dark"
  }
};
