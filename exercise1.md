To reduce errors, improve the overall code quality, and enforce a code standard across the development team, we will want to use Pylint to automatically lint the code.

Since Python is an interpreted language, its “build” process mainly revolves around test execution rather than compilation. For writing our tests will be using pytest, as it offers a straightforward syntax that everyone in the team can quickly learn (if necessary), and also offers plenty of plugins.

To be able to automate the testing process, we’ll need to let Python know about all the dependencies of the project (anything that doesn’t come with the python standard library) in the requirements.txt or a Pipfile.

Regarding hosting our pipeline, a self-hosted setup will be very time intensive, often requiring dedicated staff to take care of it full-time. As we’re a relatively small team of 6 people, I’d like to minimize the amount of pipeline workload. Hosting the setup on a cloud-based environment like GitHub Actions will do that for us, as it offers a high-level support and onboarding assistance, enabling us to have the entire team focus all on the actual development.

If we're deciding on a Linux environment, we should also look into Bitbucket Pipelines or GitLab CI/CD as a GitHub actions alternative.
