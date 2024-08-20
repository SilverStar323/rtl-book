[
  {
    content:
      'const MoreNames = () => {\r\n  return (\r\n    <div>\r\n      <div>\r\n        <label htmlFor="email">Email</label>\r\n        <input id="email" />\r\n      </div>\r\n      <div>\r\n        <label htmlFor="search">Search</label>\r\n        <input id="search" />\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nrender(<MoreNames />);',
    type: "code",
    id: "6lt09",
  },
  {
    content:
      "test('shows an email and search input', () => {\r\n  render(<MoreNames />);\r\n\r\n  const emailInput = screen.getByRole('textbox', {\r\n    name: /email/i\r\n  });\r\n\r\n  const searchInput = screen.getByRole('textbox', {\r\n    name: /search/i\r\n  });\r\n\r\n  expect(emailInput).toBeInTheDocument();\r\n  expect(searchInput).toBeInTheDocument();\r\n});",
    type: "code",
    id: "dtxck",
  },
  {
    content:
      'const IconButtons = () => {\r\n  return (\r\n    <div>\r\n      <button aria-label="sign in">\r\n        <svg />\r\n      </button>\r\n\r\n      <button aria-label="sign out">\r\n        <svg />\r\n      </button>\r\n    </div>\r\n  );\r\n};\r\n\r\nrender(<IconButtons />);',
    type: "code",
    id: "9j62k",
  },
  {
    content:
      "test('find elements based on label', () => {\r\n  render(<IconButtons />);\r\n\r\n  const signInButton = screen.getByRole('button', {\r\n    name: /sign in/i\r\n  });\r\n  const signOutButton = screen.getByRole('button', {\r\n    name: /sign out/i\r\n  });\r\n  \r\n  expect(signInButton).toBeInTheDocument();\r\n  expect(signOutButtonW ).toBeInTheDocument();\r\n});",
    type: "code",
    id: "y7orc",
  },
];
