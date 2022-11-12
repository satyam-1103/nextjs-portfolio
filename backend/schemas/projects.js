export default  
    {
        name : "projects",
        type : "document",
        title : "Projects",
        fields : [
            {
                name : "title",
                title : "title",
                description : "Title of the project",
                type: "string"
            },
            {
                name : "image",
                title: "Image",
                type : "image",
                options : {
                    hotspot : true,
                }
            },
            {
                name: "summary",
                title: "Summary",
                type: "text"
            },
            {
                name : "technologies",
                title: "Technologies",
                type: "array",
                of: [{type: "reference", to : {type : "skill"}}]
            },
            {
                name: "linkToBuild",
                title: "Link To Build",
                type: "url"
            }
            
        ]
    }
