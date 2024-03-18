import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { AuthContext } from "../../../src/auth/context";
import { MemoryRouter, Routes } from "react-router-dom";

describe("Pruebas en PublicRoute", () => {
  test("debe mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Publica")).toBeTruthy();
  });

  test("debe navegar si esta login", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={"/login"}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>ruta publica</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>Pagina marvrel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect("Pagina Marvel").toBeTruthy();
  });
});
