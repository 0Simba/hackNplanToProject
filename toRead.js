module.exports = [
    {
        name   : "tasks",
        path   : "./data/coopsacr/tasks.csv",
        config : {
            extractKeys : {
                "TaskId"      : {default : 0},
                "Title"       : {default : "-"},
                "Description" : {default : "-"},
                "MilestoneId" : {default : 0}
            }
        }
    }, {
        name   : "stories",
        path   : "./data/coopsacr/game_design_model.csv",
        config : {
            extractKeys : {
                "ParentDesignElementId" : {default : -1},
                "Name"                  : {default : "-"},
                "Description"           : {default : "-"}
            }
        }
    }

]