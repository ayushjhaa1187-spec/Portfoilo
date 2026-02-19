import sys

filepath = 'portfolio/client/app/projects/page.tsx'

with open(filepath, 'r') as f:
    content = f.read()

# Import
content = content.replace("import React, { useState } from 'react';", "import React, { useState, useCallback } from 'react';")

# Handler insertion
handler_code = """
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const handleFilterClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.dataset.category;
    if (category) {
      setFilter(category);
    }
  }, []);
"""

content = content.replace("""  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);""", handler_code.strip())

# Loop modification
content = content.replace("            onClick={() => setFilter(cat)}", "            data-category={cat}\n            onClick={handleFilterClick}")

with open(filepath, 'w') as f:
    f.write(content)
