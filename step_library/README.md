# mabl Step Library

The mabl step library is a public step of steps that populate as no-code steps in the trainer. Steps added will display immediately in the trainer and would be available for anyone to use.

## manifest.json

The manifest.json file stores the information required to display the steps in a no-code format. Even if a snippet is added to this repo, until the manifest is updated, the snippet will not be shown to users. A simple manifest.json (complete with all potential fields) is as follows:

```
{
    categories: [
        {
            "title": "this is a human-readable category name",
            "description": "this is a human-readable description for the category. Both this and the title will be rendered in the trainer",
            "steps": [
                {
                    "title": "this is a human-readable step name",
                    "path": "the_path_to/the_snippet/from_repo_root/without_leading_slash.js"
                    "description": "this is a human-readable description for the category. Both this and the title will be rendered in the trainer",
                    "save_to_variable": true, //if snippet outputs a value to be used later, otherwise false
                    "parameters": [
                        {
                            "display_name": "human-readable name of parameter to be rendered in trainer",
                            "name": "variable name as used in js snippet",
                            "id": 0, //order of parameters put into function
                            "placeholder": "greyed-out human-readable value to be shown in empty text field for this parameter",
                            "description": "A human-readable description to be rendered in the trainer"
                        },
                        ...
                    ]
                },
                ...
            ]

        },
        ...
    ]

}
```
