pipeline{
    agent any

    parameters {
        choice(
            name: "ENV",
            choices: ["qa", "staging"],
            description: "Select the environment"
        )
    }
    stages {

        stage("Checkout"){
            steps{
                git branch: "main",
            url: "https://github.com/Karthik-0304/Playwright_Framework.git"
            }
        }

        stage("Install Dependencies") {
            steps {
                bat "npm ci"
            }
        }

        stage("Install Playwright Browsers") {
            steps {
                bat "npx playwright install chromium"
            }
        }

        stage("Run Playwright Tests") {
            steps {
                bat "npx playwright test"
            }
        }
    }
}