const env = {
  deployments: [
    { id: 0 },
    {
      id: 1,
      advancedTuning: {
        terminationGracePeriodSeconds: 45,
      },
    },
    {
      id: 2,
      advancedTuning: {
        terminationGracePeriodSeconds: 30,
      },
    },
  ],
};

let largestTerminationGracePeriodSeconds = -1;
let largestDeployment;
for (const deployment of env.deployments) {
  const terminationGracePeriodSeconds =
    deployment.advancedTuning?.terminationGracePeriodSeconds ?? -1;
  if (terminationGracePeriodSeconds > -1) {
    if (terminationGracePeriodSeconds > largestTerminationGracePeriodSeconds) {
      largestTerminationGracePeriodSeconds = terminationGracePeriodSeconds;
      largestDeployment = deployment;
    }
  }
}

console.log(largestDeployment);
