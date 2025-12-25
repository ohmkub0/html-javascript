const options = {
    dark: 'dark mode',
    light: 'light mode'
} as const;

type ThemeOptions = keyof typeof options;

function setTheme(value: ThemeOptions) {
    
}

const filters = {
    category: 'books',
    sort: 'asc',
    page: 1
} as const;

type FilterKey = keyof typeof filters;