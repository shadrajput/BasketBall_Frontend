import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../Component/Button";
import { toast } from "react-toastify";
import { useEditMatchPlayersMutation } from "../../../services/team";

export default function MatchPlayerSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const MatchData = location?.state;
  const [editMatchPlayers, { ...matchPlayersData }] = useEditMatchPlayersMutation();
  const team1Color = "text-orange-500";
  const team2Color = "text-blue-600";
  const [captain, setCaptain] = useState(MatchData?.captain?.players.id);
  const [selectedPlayers, setSelectedPlayers] = useState([
    ...MatchData?.selectedPlayer,
  ]);
  
  if(location?.state == undefined || location?.state == null || !location?.state?.match == undefined || !location?.state?.match == null){
    return navigate('/page-not-found'); 
  }


  const handleSelect = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  const handleCaptainSelect = (playerId) => {
    setCaptain(playerId);
  };

  React.useEffect(() => {
    if (matchPlayersData.isError) {
      toast.error(matchPlayersData?.error?.data?.message);
    }
    if (matchPlayersData.isSuccess) {
      if (matchPlayersData?.data?.success) {
        toast.success(matchPlayersData.data.message);
        navigate(`/match-details/${MatchData?.match?.id}`);
      }
    }
  }, [matchPlayersData.isError, matchPlayersData.isSuccess]);

  function handleSubmit() {
    let finalPlayer = MatchData?.teamPlayers?.reduce((newArray, player) => {
      if (selectedPlayers.includes(player.player_id)) {
        newArray.push({
          player_id: player.players.id,
          match_id: MatchData?.match?.id,
          is_captain: player.players.id == captain,
          team_id: MatchData?.team.id,
        });
      }
      return newArray;
    }, []);
    if (finalPlayer.length < 1) {
      toast.error("Please Select Player");
      return;
    }
    if(finalPlayer.length < 5){
      toast.error("Minimum 5 players must be selected");
      return
    }
    if (!captain) {
      return toast.error("Please Select Captain");
    }
    if (!selectedPlayers.includes(captain)) {
      return toast.error("Captain must be selected");
    }

    editMatchPlayers({ body: finalPlayer, team_id: MatchData?.team.id, match_id: MatchData?.match?.id });
  }

  return (
    <div className="px-6 py-12">
      <div className="flex flex-row justify-center items-center">
        <h1 className=" text-2xl md:text-4xl font-bold ">
          <span className={`mr-3 ${team1Color}`}>
            {MatchData?.match?.team_1?.team_name}
          </span>
          <span className="italic opacity-50 text-gray-500">Vs</span>
          <span className={`ml-3 ${team2Color}`}>
            {MatchData?.match?.team_2?.team_name}
          </span>
        </h1>
      </div>

      <div className=" md:py-8 font-semibold ">
        <div className="sm:px-8 py-8 text-center ">
          <div className="w-full  overflow-x-scroll shadow-2xl rounded-lg   border-gray-200">
            <div
              className={`bg-black  text-white   grid grid-cols-3  text-xs   rounded p-1 sm:text-lg`}
            >
              <div className="sm:px-4 sm:py-2 ">Player Name</div>
              <div className="sm:px-4 sm:py-2 ">Captain</div>
              <div className="sm:px-4 sm:py-2 ">Select / Unselect</div>
            </div>

            {MatchData?.teamPlayers?.map((player) => (
              <div
                key={player.id}
                className={`grid grid-cols-3 bg-white  text-xs sm:text-lg mt-2 rounded-lg  shadow-2xl`}
              >
                <div className="sm:px-4 py-2">
                  {player.players.first_name} {player.players.last_name}
                </div>

                <div className="sm:px-4 py-2">
                  <div className="flex items-center justify-center">
                    <input
                      type="radio"
                      id={`captain_${player.id}`}
                      name="captain"
                      value={player.player_id}
                      checked={captain === player.player_id}
                      onChange={() => handleCaptainSelect(player.player_id)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`captain_${player.id}`}
                      className="text-sm font-medium text-gray-800"
                    >
                      Captain
                    </label>
                  </div>
                </div>
                <div className="sm:px-4 py-2 ">
                  <button
                    className={`px-2 py-1 text-sm rounded ${
                      selectedPlayers.includes(player.player_id)
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                    onClick={() => handleSelect(player.player_id)}
                  >
                    {selectedPlayers.includes(player.player_id)
                      ? "Selected"
                      : "Not Selected"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <div>
              <Button text={"Submit"} onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
