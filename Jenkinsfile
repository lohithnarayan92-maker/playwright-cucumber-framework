pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t playwright-cucumber-tests .'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'orangehrm-test-user',
                        usernameVariable: 'TEST_USERNAME',
                        passwordVariable: 'TEST_PASSWORD'
                    )
                ]) {
                    sh '''
                        docker run --rm \
                          -e BASE_URL="https://opensource-demo.orangehrmlive.com" \
                          -e BROWSER="chromium" \
                          -e HEADLESS="true" \
                          -e TIMEOUT="30000" \
                          -e TEST_USERNAME="$TEST_USERNAME" \
                          -e TEST_PASSWORD="$TEST_PASSWORD" \
                          playwright-cucumber-tests
                    '''
                }
            }
        }
    }
}