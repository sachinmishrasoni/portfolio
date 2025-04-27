const pageTitles: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/portfolio/about': 'About',
    '/admin/portfolio/experience': 'Experience',
    '/admin/portfolio/education': 'Education',
    '/admin/portfolio/skills': 'Skills',
    '/settings': 'Settings',
};

// Function to get page title dynamically
export const getPageTitle = (path: string): string => {
    if (path.startsWith('/admin/portfolio/projects')) {
        return 'Projects';
    }
    return pageTitles[path] || 'Dashboard';
};

export default pageTitles;
