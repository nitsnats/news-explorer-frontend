import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer />
      {/* return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header
          isLoggedIn={isLoggedIn}
          email={userData.email}
          signOut={signOut}
          path="/signup"
        />
        <Switch>
          <ProtectedRoute
            exact
            path="/main"
            isLoggedIn={isLoggedIn}
            isCheckingToken={isCheckingToken}
          >
            <Main
              onEditAvatarClick={handleEditAvatarClick}
              onEditProfileClick={handleEditProfileClick}
              onAddPlaceClick={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              handleDeleteClick={handleDeleteClick}
            />
          </ProtectedRoute>

          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path="/signin">
            <Login handleLogin={handleLogin} isLoading={isLoading} />
          </Route>

          <Route>
            {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isPreviewImageOpen}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        <ConfirmDeletePopup
          onSubmit={handleCardDelete}
          isLoading={isLoading}
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  ); */}

    </div>
  );
}

export default App;
