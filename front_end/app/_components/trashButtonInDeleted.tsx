import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useStatus } from "../_contexts/StatusContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDeletedTodo } from "../_contexts/DeletedTodoContext";
import { useDeleteTodoFromTrashMutation } from "../generated";
type TodoType = {
  title: string;
  id: string;
  // RemoveTodo: (title: string) => void;
};
export function TrashButton(props: TodoType) {
  const { title, id } = props;
  const { refetch } = useDeletedTodo();
  const [deleteTodo, { data }] = useDeleteTodoFromTrashMutation();
  const HandleMoveToTrash = async () => {
    const deleteTodoInput = {
      id: id,
    };
    try {
      await deleteTodo({ variables: { input: deleteTodoInput } }).then(
        (res) => {
          refetch();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete "{title}" from trash?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {/* This action cannot be undone. This will permanently delete your
              account and remove your data from our servers. */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={HandleMoveToTrash}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
