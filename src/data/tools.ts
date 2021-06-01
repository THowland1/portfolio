import AzureDevOpsLogo from '../images/logos/azuredevops.svg';
import AzureAppServicesLogo from '../images/logos/azureappservices.svg';
import JiraLogo from '../images/logos/jira.svg';
import OctopusDeployLogo from '../images/logos/octopusdeploy.svg';

export interface Tool {
  logo: string;
  title: string;
}

export const azuredevops = { title: 'Azure DevOps', logo: AzureDevOpsLogo };
export const azureappservices = {
  title: 'Azure App Services',
  logo: AzureAppServicesLogo,
};
export const jira = { title: 'Jira', logo: JiraLogo };
export const octupusdeploy = {
  title: 'Octopus Deploy',
  logo: OctopusDeployLogo,
};
