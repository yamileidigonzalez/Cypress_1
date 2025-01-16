pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent_11"
                    }
                    steps {
                        git url: 'https://github.com/yamileidigonzalez/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 34f0364b-27ca-4a14-b937-95961b0fae4c  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent_12"
                    }
                    steps {
                        git url: 'https://github.com/yamileidigonzalez/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 34f0364b-27ca-4a14-b937-95961b0fae4c  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent_13"
                    }
                    steps {
                        git url: 'https://github.com/yamileidigonzalez/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 34f0364b-27ca-4a14-b937-95961b0fae4c  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent_14"
                    }
                    steps {
                        git url: 'https://github.com/yamileidigonzalez/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 34f0364b-27ca-4a14-b937-95961b0fae4c  --parallel'
                    
                    }
                }
                
                stage('Slave 5') {
                    agent {
                        label "Agent_15"
                    }
                    steps {
                        git url: 'https://github.com/yamileidigonzalez/Cypress_1.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 34f0364b-27ca-4a14-b937-95961b0fae4c  --parallel'
                    
                    }
                }              
   
                  
            }

             
        }

    }
            
}