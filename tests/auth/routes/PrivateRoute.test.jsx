import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context";
import { MemoryRouter, Router, Routes } from "react-router-dom";
import { PrivateRoute } from "../../../src/router/PrivateRoute";
describe("Pruebas en <PrivateRoute/>", () => {
  test("debe mostrar el children si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "juan carlos",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta privada")).toBeTruthy();
  });
});
