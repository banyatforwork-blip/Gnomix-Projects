================================================================================
                           HOW TO EDIT THE GNOMIX WEBSITE
================================================================================

Blah blah

================================================================================
                              EDITING PROJECTS
================================================================================

The projects are stored in a simple file called:

    data/projects.json

Open this file in any text editor (like Notepad, VS Code).


STRUCTURE EXPLAINED:
--------------------

The file has two main sections:

1. "siteInfo" - General website information
2. "projects" - The list of projects displayed on the site


SITE INFO SECTION:
------------------

{
  "siteInfo": {
    "title": "Gnomix",                              <- Main title on the hero
    "tagline": "Transform Ubuntu Into Pure GNOME",  <- Subtitle under title
    "description": "A collection of...",            <- Description text
    "githubProfile": "https://github.com/...",      <- GitHub profile URL
    "discordUrl": "https://discord.gg/..."          <- Discord invite link
  }
}

Just change the text between the quotes to update the website!


PROJECTS SECTION:
-----------------

Each project looks like this:

{
  "id": "my-project",                               <- Unique ID (no spaces!)
  "name": "My Project Name",                        <- Display name
  "description": "What the project does...",        <- Description
  "githubUrl": "https://github.com/user/repo",      <- Link to the repo
  "tags": ["Tag1", "Tag2", "Tag3"],                 <- Technology tags
  "featured": true                                  <- Show "Featured" badge?
}


================================================================================
                              ADDING A NEW PROJECT
================================================================================

1. Open data/projects.json
2. Find the "projects" array (it starts with [ and ends with ])
3. Add a comma after the last project's closing }
4. Add your new project following this template:

    {
      "id": "unique-id-here",
      "name": "Project Name",
      "description": "Description of your project",
      "githubUrl": "https://github.com/username/repo",
      "tags": ["Tag1", "Tag2"],
      "featured": false
    }

EXAMPLE - Adding a second project:

"projects": [
    {
      "id": "gnomix-script",
      "name": "Gnomix Script",
      ...
    },                                    <- DON'T FORGET THIS COMMA!
    {
      "id": "new-project",
      "name": "My New Project",
      "description": "This is a cool new project!",
      "githubUrl": "https://github.com/gnomixperson/new-project",
      "tags": ["Python", "Linux"],
      "featured": false
    }
  ]


================================================================================
                             REMOVING A PROJECT
================================================================================

1. Open data/projects.json
2. Find the project you want to remove
3. Delete the entire block from { to }
4. Make sure to remove any trailing commas if needed


================================================================================
                              COMMON MISTAKES
================================================================================

1. MISSING COMMAS
   - Every project needs a comma after it EXCEPT the last one
   - Wrong: } {
   - Right: }, {

2. MISSING QUOTES
   - All text values need quotes around them
   - Wrong: name: My Project
   - Right: "name": "My Project"

3. DUPLICATE IDs
   - Each project must have a unique "id" value
   - No spaces or special characters in IDs

4. BROKEN URLs
   - Make sure all URLs start with https://
   - Test the links work before saving


================================================================================
                              TESTING CHANGES
================================================================================

After editing projects.json:

1. Save the file
2. Refresh the website in your browser
3. If something looks wrong, check for the common mistakes above


================================================================================
                                 NEED HELP?
================================================================================

- Check that your JSON is valid: https://jsonlint.com/
- Ask in the Discord: https://discord.gg/RHS3NptNpc
- Website created by @chichbo

================================================================================
